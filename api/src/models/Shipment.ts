const {Sequelize , DataTypes } = require('sequelize');
import sequelize from "../database/database";

  export const Shipment = sequelize.define('Shipment', {
    Shipment_UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    S_Year: {
      type: DataTypes.INTEGER,
    },
    Shipment_ID: {
      type: DataTypes.STRING,
    },
    Trans: {
      type: DataTypes.STRING,
    },
    Customs_Info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Mode: {
      type: DataTypes.STRING,
    },
    Origin: {
      type: DataTypes.STRING,
    },
    Origin_Country: {
      type: DataTypes.STRING,
    },
    Destination: {
      type: DataTypes.STRING,
    },
    Destination_Country: {
      type: DataTypes.STRING,
    },
    Consignor_Code: {
      type: DataTypes.STRING,
    },
    Consignor_Name: {
      type: DataTypes.STRING,
    },
    Consignee_Code: {
      type: DataTypes.STRING,
    },
    Consignee_Name: {
      type: DataTypes.STRING,
    },
    House_Ref: {
      type: DataTypes.STRING,
    },
    INCO: {
      type: DataTypes.STRING,
    },
    Additional_Terms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PPD_CCX: {
      type: DataTypes.STRING,
    },
    Goods_Description: {
      type: DataTypes.STRING,
    },
    Origin_ETD: {
      type: DataTypes.DATE,
    },
    Destination_ETA: {
      type: DataTypes.DATE,
    },
    Weight: {
      type: DataTypes.FLOAT,
    },
    Weight_UQ: {
      type: DataTypes.STRING,
    },
    Volume: {
      type: DataTypes.FLOAT,
    },
    Volume_UQ: {
      type: DataTypes.STRING,
    },
    Loading_Meters: {
      type: DataTypes.INTEGER,
    },
    Chargeable: {
      type: DataTypes.FLOAT,
    },
    Chargeable_Unit_UQ: {
      type: DataTypes.STRING,
    },
    Inner_Packets: {
      type: DataTypes.INTEGER,
    },
    Inner_Unit_UQ: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Outer_Packets: {
      type: DataTypes.INTEGER,
    },
    Outers_Unit_UQ: {
      type: DataTypes.STRING,
    },
    Added_Date: {
      type: DataTypes.DATE,
    },
    Controlling_Customer_Code: {
      type: DataTypes.STRING,
    },
    Controlling_Customer_Name: {
      type: DataTypes.STRING,
    },
    Controlling_Agent_Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Controlling_Agent_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Transport_Job: {
      type: DataTypes.STRING,
    },
    Brokerage_Job: {
      type: DataTypes.STRING,
    },
    Is_Master_Lead: {
      type: DataTypes.STRING,
    },
    Master_Lead_Ref: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Import_Broker_Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Import_Broker_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Export_Broker_Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Export_Broker_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Job_Branch: {
      type: DataTypes.STRING,
    },
    Job_Dept: {
      type: DataTypes.STRING,
    },
    Local_Client_Code: {
      type: DataTypes.STRING,
    },
    Local_Client_Name: {
      type: DataTypes.STRING,
    },
    Job_Sales_Rep: {
      type: DataTypes.STRING,
    },
    Job_Operator: {
      type: DataTypes.STRING,
    },
    Job_Status: {
      type: DataTypes.STRING,
    },
    Job_Opened: {
      type: DataTypes.DATE,
    },
    Recognized_Revenue: {
      type: DataTypes.FLOAT,
    },
    Recognized_WIP: {
      type: DataTypes.FLOAT,
    },
    Total_Recognized_Income_REV_WIP: {
      type: DataTypes.FLOAT,
    },
    Recognized_Cost: {
      type: DataTypes.FLOAT,
    },
    Recognized_Accrual: {
      type: DataTypes.FLOAT,
    },
    Total_Recognized_Expense_CS_ACR: {
      type: DataTypes.FLOAT,
    },
    Job_Profit: {
      type: DataTypes.FLOAT,
    },
    Consol_ID: {
      type: DataTypes.STRING,
    },
    First_Load: {
      type: DataTypes.STRING,
    },
    Last_Discharge: {
      type: DataTypes.STRING,
    },
    ETD_First_Load: {
      type: DataTypes.DATE,
    },
    ETA_Last_Discharge: {
      type: DataTypes.DATE,
    },
    Master_BL: {
      type: DataTypes.STRING,
    },
    Vessel: {
      type: DataTypes.STRING,
    },
    Flight_Voyage: {
      type: DataTypes.STRING,
    },
    Load_Port: {
      type: DataTypes.STRING,
    },
    Discharge: {
      type: DataTypes.STRING,
    },
    ETD_Load: {
      type: DataTypes.DATE,
    },
    ETA_Discharge: {
      type: DataTypes.DATE,
    },
    Sending_Agent_Code: {
      type: DataTypes.STRING,
    },
    Sending_Agent_Name: {
      type: DataTypes.STRING,
    },
    Receiving_Agent: {
      type: DataTypes.STRING,
    },
    Receiving_Agent_Name: {
      type: DataTypes.STRING,
    },
    Co_loaded_With: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Co_loader_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Carrier_Code: {
      type: DataTypes.STRING,
    },
    Carrier_Name: {
      type: DataTypes.STRING,
    },
    TEU: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Container_Count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    C20F: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C20R: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C20H: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C40F: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C40R: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C40H: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    C45F: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    GEN: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Service_Level_Code: {
      type: DataTypes.STRING,
    },
    Shippers_Reference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Consignor_City: {
      type: DataTypes.STRING,
    },
    Consignor_State: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Consignor_Postcode: {
      type: DataTypes.STRING,
    },
    Consignee_City: {
      type: DataTypes.STRING,
    },
    Consignee_State: {
      type: DataTypes.STRING,
    },
    Consignee_Postcode: {
      type: DataTypes.STRING,
    },
    Consol_ATD: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Consol_ATA: {
      type: DataTypes.DATE,
    },
    Job_Revenue_Recognition_Date: {
      type: DataTypes.STRING,
    },
    Direction: {
      type: DataTypes.STRING,
    },
    Local_Client_AR_Settlement_Group_Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Local_Client_AR_Settlement_Group_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Overseas_Agent_Code: {
      type: DataTypes.STRING,
    },
    Overseas_Agent_Name: {
      type: DataTypes.STRING,
    },
    Job_Overseas_Agent_AR_Settlement_Group_Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Job_Overseas_Agent_AR_Settlement_Group_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Commodity: {
      type: DataTypes.STRING,
    },
    Contract_No: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Actual_Cartage_Delivery_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Actual_Cartage_Delivery_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Delivery_Cartage_Advised_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Delivery_Cartage_Advised_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Cartage_Deliver_By_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Cartage_Deliver_By_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Cartage_Drop_Mode: {
      type: DataTypes.STRING,
    },
    Est_Cartage_Delivery_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Est_Cartage_Delivery_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    House_Bill_Type: {
      type: DataTypes.STRING,
    },
    Is_Active: {
      type: DataTypes.STRING,
    },
    Total_Accrual_Recognized_Unrecognized: {
      type: DataTypes.FLOAT,
    },
    Total_Cost_Recognize_Unrecognized: {
      type: DataTypes.FLOAT,
    },
    Total_Expense_Recognize_Unrecognized_CST_ACR: {
      type: DataTypes.FLOAT,
    },
    Total_Income_Recognized_Unrecognized_REV_WIP: {
      type: DataTypes.FLOAT,
    },
    Total_Revenue_Recognize_Unrecognized: {
      type: DataTypes.FLOAT,
    },
    Total_Unrecognized_Expense_CST_ACR: {
      type: DataTypes.FLOAT,
    },
    Total_Unrecognized_Income_REV_WIP: {
      type: DataTypes.FLOAT,
    },
    Total_WIP_Recognized_Unrecognized: {
      type: DataTypes.FLOAT,
    },
    Unrecognized_Accrual: {
      type: DataTypes.FLOAT,
    },
    Unrecognized_Cost: {
      type: DataTypes.FLOAT,
    },
    Unrecognized_Revenue: {
      type: DataTypes.FLOAT,
    },
    Unrecognized_WIP: {
      type: DataTypes.FLOAT,
    },
    Actual_Pickup_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Actual_Pickup_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Pickup_Cartage_Advised_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Pickup_Cartage_Advised_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Cartage_Pickup_Mode: {
      type: DataTypes.STRING,
    },
    Interim_Receipt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Interim_Receipt_No: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Pickup_By_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Pickup_By_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Pickup_From_Date_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Pickup_From_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Last_edited_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Imported_On: {
      type: DataTypes.DATE,
    },
    Updated_On: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Controlling_Rep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'Shipment', // The table name in the database
    timestamps: false, // Set to true if you want Sequelize to automatically manage createdAt and updatedAt
  });
  