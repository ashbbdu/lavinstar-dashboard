import { Request, Response } from "express";
import { Op, Sequelize, col, fn } from "sequelize";
import { Shipment } from "../models/Shipment";
import {  calculateCustomYears, getExtendedStartEndDate } from "../utils/datematch";
export const getAllShipment = async (req: Request, res: Response) => {
  try {
    const shipmentData = await Shipment.findAll();
    res.json({
      success: true,
      shipmentData,
    });
  } catch (error) {
    console.log("inside catch");
    console.log(error);
    res.json({
      success: false,
      msg: "Internal Server Error !",
    });
  }
};

// export const getShipmentData = async (req: Request, res: Response) => {
//     try {
//         const { Date_From, Date_To, range, pageNumber, perPage } = req.query;

//         if (!Date_From || !Date_To) {
//             res.status(401).json({
//                 success: false,
//                 message: "Please provide the required fields !",
//             });
//         }

//         const start = new Date(Date_From as string);
//         const end = new Date(Date_To as string);
//         console.log(start , end ,"sta");

//         const {adjustedStart , endDate} = getExtendedStartEndDate(range as string, start , end);
//         console.log(adjustedStart , endDate , "dates");

//         const shipmentData = await Shipment.findAll({
//             // where: { Job_Opened: { [Op.between]: [new Date("2024-08-21"), new Date("2024-08-21")] } },
//             where: {
//                 [Op.and]: [
//                     Sequelize.where(
//                         fn('DATE', col('Job_Opened')),
//                         {
//                             [Op.between]: [adjustedStart, endDate]
//                         }
//                     )
//                 ]
//             },
//             attributes: ["Shipment_UID", "Trans", "Mode", "Direction", "Container_Count"],
//             offset: Number(pageNumber) * 10, limit: Number(perPage)
//         });

//         const shipmentComparision = await Shipment.findAll({
//             where: {
//                 [Op.and]: [
//                     Sequelize.where(
//                         fn('DATE', col('Job_Opened')),
//                         {
//                             [Op.between]: [adjustedStart, endDate]
//                         }
//                     )
//                 ]
//             }
//         });

//        console.log(shipmentData.length, "shipmentData length");

//         res.status(200).json({
//             comarision : shipmentComparision.length,
//             length: shipmentData.length,
//             success: true,
//             Date_From,
//             Date_To,
//             adjustedStart,
//             endDate,
//             shipmentData,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error !",
//         });
//     }
// };

export const getShipmentData = async (req: Request, res: Response) => {
  try {
    const { Date_From, Date_To, range, pageNumber, perPage } = req.query;

    if (!Date_From || !Date_To) {
      res.status(401).json({
        success: false,
        message: "Please provide the required fields!",
      });
    }

    const start = new Date(Date_From as string);
    const end = new Date(Date_To as string);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      res.status(400).json({
        success: false,
        message: "Invalid dates provided!",
      });
    }

    const totalDays = calculateCustomYears(start, end);

    const { adjustedStart, adjustedEnd } = getExtendedStartEndDate(
      range as string,
      start,
      end,
      totalDays
    );

    // console.log(adjustedStart, adjustedEnd, "dates");
    
    // res.status(200).json({msg :  "Success" , adjustedStart , adjustedEnd});
    // const page = Number(pageNumber) || 0;
    // const limit = Number(perPage) || 10;

    const shipmentData = await Shipment.findAll({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [start, end],
          }),
        ],
      },
      attributes: [
        "Shipment_UID",
        "Trans",
        "Mode",
        "Direction",
        "Container_Count",
        "Additional_Terms",
      ],
      // offset: page * limit,
      // limit,
    });

    const shipmentComparisionCount = await Shipment.count({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [adjustedStart, adjustedEnd],
          }),
        ],
      },
    });

    const currentLCLCount = await Shipment.count({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [start, end],
          }),
          { Mode: "LCL" },
        ],
      },
    });

    const previousLCLCount = await Shipment.count({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [adjustedStart, adjustedEnd],
          }),
          { Mode: "LCL" },
          // {Direction : "Import"}
        ],
      },
    });

    const currentFLCLCount = await Shipment.count({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [start, end],
          }),
          { Mode: "FCL" },
        ],
      },
    });
    const previousFCLCount = await Shipment.count({
      where: {
        [Op.and]: [
          Sequelize.where(fn("DATE", col("Job_Opened")), {
            [Op.between]: [adjustedStart, adjustedEnd],
          }),
          { Mode: "FCL" },
        ],
      },
    });
    res.status(200).json({
      success: true,
      shipmentOpenedCountComparision: shipmentComparisionCount, // the date prrior to the range
      shipmentOpenedCount: shipmentData.length, // from the date range provided from FE
      lclCount : currentLCLCount,
      lclCountComparision: previousLCLCount,
      fclCount: currentFLCLCount,
      fclCountComparision: previousFCLCount,
      range,
      Date_From,
      Date_To,
      comparisionStart: adjustedStart,
      comparisionEnd: adjustedEnd,
    });
  } catch (error: any) {
    console.error("Error in getShipmentData:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};
