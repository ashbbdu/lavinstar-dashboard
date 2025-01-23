import { Request, Response } from "express";
import { Op, Sequelize, col, fn, literal } from "sequelize";
import { Shipment } from "../models/Shipment";
import {
  calculateCustomYears,
  getExtendedStartEndDate,
} from "../utils/datematch";
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

    console.log(start, end, "sta");
    

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
      attributes: [
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'LCL' AND Direction = 'Import' AND DATE(Job_Opened) BETWEEN '${start}' AND '${end}' THEN 1 END`
            )
          ),
          "currentLCLImportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'LCL' AND Direction = 'Export' AND DATE(Job_Opened) BETWEEN '${start}' AND '${end}' THEN 1 END`
            )
          ),
          "currentLCLExportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'FCL' AND Direction = 'Import' AND DATE(Job_Opened) BETWEEN '${start}' AND '${end}' THEN 1 END`
            )
          ),
          "currentFCLImportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'FCL' AND Direction = 'Export' AND DATE(Job_Opened) BETWEEN '${start}' AND '${end}' THEN 1 END`
            )
          ),
          "currentFCLExportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'LCL' AND Direction = 'Import' AND DATE(Job_Opened) BETWEEN '${adjustedStart}' AND '${adjustedEnd}' THEN 1 END`
            )
          ),
          "previousLCLImportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'LCL' AND Direction = 'Export' AND DATE(Job_Opened) BETWEEN '${adjustedStart}' AND '${adjustedEnd}' THEN 1 END`
            )
          ),
          "previousLCLExportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'FCL' AND Direction = 'Import' AND DATE(Job_Opened) BETWEEN '${adjustedStart}' AND '${adjustedEnd}' THEN 1 END`
            )
          ),
          "previousFCLImportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN Mode = 'FCL' AND Direction = 'Export' AND DATE(Job_Opened) BETWEEN '${adjustedStart}' AND '${adjustedEnd}' THEN 1 END`
            )
          ),
          "previousFCLExportCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN DATE(Job_Opened) BETWEEN '${start}' AND '${end}' THEN 1 END`
            )
          ),
          "shipmentOpenedCount",
        ],
        [
          fn(
            "COUNT",
            literal(
              `CASE WHEN DATE(Job_Opened) BETWEEN '${adjustedStart}' AND '${adjustedEnd}' THEN 1 END`
            )
          ),
          "shipmentOpenedCountComparision",
        ],
      ],
      raw: true, // Return plain objects instead of Sequelize models
    });

    const response: any = shipmentData[0]; // Since the query will return a single row {}

    res.status(200).json({
      success: true,
      shipmentOpenedCount: response.shipmentOpenedCount,
      shipmentOpenedCountComparision: response.shipmentOpenedCountComparision,
      lclImportCount: response.currentLCLImportCount,
      lclImportCountComparision: response.previousLCLImportCount,
      lclExportCount: response.currentLCLExportCount,
      lclExportCountComparision: response.previousLCLExportCount,
      fclImportCount: response.currentFCLImportCount,
      fclImportCountComparision: response.previousFCLImportCount,
      fclExportCount: response.currentFCLExportCount,
      fclExportCountComparision: response.previousFCLExportCount,
      range,
      Date_From: start.toISOString().split("T")[0],
      Date_To: end.toISOString().split("T")[0],
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
