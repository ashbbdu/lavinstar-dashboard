
export interface IDateMatch {
    range : "today" | "week" | "month" | "year";
}


export interface ShipmentAttributes {
        Shipment_UID: number;
        S_Year: number;
        Shipment_ID: string;
        Trans: string;
        Customs_Info?: string | null;
        Mode: string;
        Origin: string;
        Origin_Country: string;
        Destination: string;
        Destination_Country: string;
        Consignor_Code: string;
        Consignor_Name: string;
        Consignee_Code: string;
        Consignee_Name: string;
        House_Ref: string;
        INCO: string;
        Additional_Terms?: string | null;
        PPD_CCX: string;
        Goods_Description: string;
        Origin_ETD: Date;
        Destination_ETA: Date;
        Weight: number;
        Weight_UQ: string;
        Volume: number;
        Volume_UQ: string;
        Loading_Meters: number;
        Chargeable: number;
        Chargeable_Unit_UQ: string;
        Inner_Packets: number;
        Inner_Unit_UQ?: string | null;
        Outer_Packets: number;
        Outers_Unit_UQ: string;
        Added_Date: Date;
        Controlling_Customer_Code: string;
        Controlling_Customer_Name: string;
        Controlling_Agent_Code?: string | null;
        Controlling_Agent_Name?: string | null;
        Transport_Job: string;
        Brokerage_Job: string;
        Is_Master_Lead: string;
        Master_Lead_Ref?: string | null;
        Import_Broker_Code?: string | null;
        Import_Broker_Name?: string | null;
        Export_Broker_Code?: string | null;
        Export_Broker_Name?: string | null;
        Job_Branch: string;
        Job_Dept: string;
        Local_Client_Code: string;
        Local_Client_Name: string;
        Job_Sales_Rep: string;
        Job_Operator: string;
        Job_Status: string;
        Job_Opened: Date;
        Recognized_Revenue: number;
        Recognized_WIP: number;
        Total_Recognized_Income_REV_WIP: number;
        Recognized_Cost: number;
        Recognized_Accrual: number;
        Total_Recognized_Expense_CS_ACR: number;
        Job_Profit: number;
        Consol_ID: string;
        First_Load: string;
        Last_Discharge: string;
        ETD_First_Load: Date;
        ETA_Last_Discharge: Date;
        Master_BL: string;
        Vessel: string;
        Flight_Voyage: string;
        Load_Port: string;
        Discharge: string;
        ETD_Load: Date;
        ETA_Discharge: Date;
        Sending_Agent_Code: string;
        Sending_Agent_Name: string;
        Receiving_Agent: string;
        Receiving_Agent_Name: string;
        Co_loaded_With?: string | null;
        Co_loader_Name?: string | null;
        Carrier_Code: string;
        Carrier_Name: string;
        TEU?: number | null;
        Container_Count?: number | null;
        Other?: string | null;
        C20F?: number | null;
        C20R?: number | null;
        C20H?: number | null;
        C40F?: number | null;
        C40R?: number | null;
        C40H?: number | null;
        C45F?: number | null;
        GEN?: number | null;
        Service_Level_Code: string;
        Shippers_Reference?: string | null;
        Consignor_City: string;
        Consignor_State?: string | null;
        Consignor_Postcode: string;
        Consignee_City: string;
        Consignee_State: string;
        Consignee_Postcode: string;
        Consol_ATD?: Date | null;
        Consol_ATA: Date;
        Job_Revenue_Recognition_Date: string;
        Direction: string;
        Local_Client_AR_Settlement_Group_Code?: string | null;
        Local_Client_AR_Settlement_Group_Name?: string | null;
        Overseas_Agent_Code: string;
        Overseas_Agent_Name: string;
        Job_Overseas_Agent_AR_Settlement_Group_Code?: string | null;
        Job_Overseas_Agent_AR_Settlement_Group_Name?: string | null;
        Commodity: string;
        Contract_No?: string | null;
        Actual_Cartage_Delivery_Date_Time?: Date | null;
        Actual_Cartage_Delivery_Date?: Date | null;
        Delivery_Cartage_Advised_Date_Time?: Date | null;
        Delivery_Cartage_Advised_Date?: Date | null;
        Cartage_Deliver_By_Date_Time?: Date | null;
        Cartage_Deliver_By_Date?: Date | null;
        Cartage_Drop_Mode: string;
        Est_Cartage_Delivery_Date_Time?: Date | null;
        Est_Cartage_Delivery_Date?: Date | null;
        House_Bill_Type: string;
        Is_Active: string;
        Total_Accrual_Recognized_Unrecognized: number;
        Total_Cost_Recognize_Unrecognized: number;
        Total_Expense_Recognize_Unrecognized_CST_ACR: number;
        Total_Income_Recognized_Unrecognized_REV_WIP: number;
        Total_Revenue_Recognize_Unrecognized: number;
        Total_Unrecognized_Expense_CST_ACR: number;
        Total_Unrecognized_Income_REV_WIP: number;
        Total_WIP_Recognized_Unrecognized: number;
        Unrecognized_Accrual: number;
        Unrecognized_Cost: number;
        Unrecognized_Revenue: number;
        Unrecognized_WIP: number;
        Actual_Pickup_Date_Time?: Date | null;
        Actual_Pickup_Date?: Date | null;
        Pickup_Cartage_Advised_Date_Time?: Date | null;
        Pickup_Cartage_Advised_Date?: Date | null;
        Cartage_Pickup_Mode: string;
        Interim_Receipt?: string | null;
        Interim_Receipt_No?: string | null;
        Pickup_By_Date_Time?: Date | null;
        Pickup_By_Date?: Date | null;
        Pickup_From_Date_Time?: Date | null;
        Pickup_From_Date?: Date | null;
        Last_edited_Date?: Date | null;
        Imported_On: Date;
        Updated_On?: Date | null;
        Source?: string | null;
        Controlling_Rep?: string | null;
      }
