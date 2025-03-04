// export const getExtendedStartEndDate = (range: string, startDate: Date , endDate : Date) => {
//     let adjustedStart: Date;
//     let adjustedEnd: Date = new Date(endDate);

//     switch (range) {
        // case "today":
        //     adjustedStart = new Date(startDate);
        //     adjustedEnd.setDate(adjustedEnd.getDate() - 1);
        //     break;

//         case "week":
//             adjustedStart = new Date(startDate);
//             adjustedStart.setDate(startDate.getDate() - 7);
//             adjustedEnd.setDate(adjustedEnd.getDate() - 7);
//             break;

//         case "month":
//             adjustedStart = new Date(startDate);
//             adjustedStart.setMonth(startDate.getMonth() - 1);
//             adjustedEnd.setMonth(adjustedEnd.getMonth() - 1);
//             break;

//         case "year":
//             adjustedStart = new Date(startDate);
//             adjustedStart.setFullYear(startDate.getFullYear() - 1);
//             adjustedEnd.setFullYear(adjustedEnd.getFullYear() - 1);
//             break;

//         default:
//             throw new Error("Invalid range. Valid ranges are 'today', 'week', 'month', or 'year'.");
//     }

//     adjustedEnd.setDate(adjustedEnd.getDate() - 1);

//     const formatDate = (date: Date) => date.toISOString().split('T')[0];
//     console.log(formatDate(adjustedStart) ,  formatDate(adjustedEnd) , "all dates");

//     return {
//         adjustedStart: formatDate(adjustedStart),
//         endDate: formatDate(adjustedEnd)
//     };
// };

// export const calculateCustomYears = (
//   startDate: Date,
//   endDate: Date
// ): number => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const yearsDifference = end.getFullYear() - start.getFullYear();

//   if (
//     end.getMonth() < start.getMonth() ||
//     (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
//   ) {
//     return yearsDifference - 1;
//   }
//   return yearsDifference;
// };

// export const getExtendedStartEndDate = (
//   range: string,
//   startDate: Date,
//   endDate: Date,
//   customDays?: number
// ) => {
//   let adjustedStart: Date;
//   let adjustedEnd: Date;

//   if (!customDays) {
//     const diffInYears = calculateCustomYears(startDate, endDate);
//     customDays = diffInYears;
//   }
//   adjustedStart = new Date(startDate);
//   adjustedEnd = new Date(startDate);
//   switch (range) {
//     case "today":
//             adjustedStart = new Date(startDate);
//             adjustedEnd.setDate(adjustedEnd.getDate() - 1);
//             break;
            
//     case "week":
//       adjustedStart = new Date(startDate);
//       adjustedStart.setDate(startDate.getDate() - 7);
//       adjustedEnd = new Date(startDate);
//       adjustedEnd.setDate(adjustedEnd.getDate() - 1);
//       break;

//     case "month":
//       adjustedStart = new Date(startDate);
//       adjustedStart.setMonth(startDate.getMonth() - 1);
//       adjustedEnd = new Date(startDate);
//       adjustedEnd.setDate(adjustedEnd.getDate() - 1);
//       break;

//     case "year":
//       adjustedStart = new Date(startDate);
//       adjustedStart.setFullYear(startDate.getFullYear() - 1);
//       adjustedEnd = new Date(startDate);
//       adjustedEnd.setDate(adjustedEnd.getDate() - 1);
//       break;

//     case "custom":
//       adjustedStart = new Date(startDate);
//       adjustedStart.setFullYear(startDate.getFullYear() - customDays);
//       adjustedEnd = new Date(startDate);
//       adjustedEnd.setDate(adjustedEnd.getDate() - 1);

//       if (adjustedEnd.getDate() === startDate.getDate()) {
//         adjustedEnd.setMonth(adjustedEnd.getMonth() - 1); 
//         adjustedEnd.setDate(
//           new Date(
//             adjustedEnd.getFullYear(),
//             adjustedEnd.getMonth() + 1,
//             0
//           ).getDate()
//         );  
//       }
//       break;

//     default:
//       throw new Error("Invalid range. Valid ranges are 'custom'.");
//   }

//   const formatDate = (date: Date) => date.toISOString().split("T")[0];

//   return {
//     adjustedStart: formatDate(adjustedStart),
//     adjustedEnd: formatDate(adjustedEnd),
//   };
// };



// New Code Snippet:


export const calculateCustomMonths = (
  startDate: Date,
  endDate: Date
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Calculate difference in full months
  const monthsDifference = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  // If the end day is earlier in the month than the start day, subtract 1 month
  if (end.getDate() < start.getDate()) {
    return monthsDifference - 1;
  }
  return monthsDifference;
};

export const getExtendedStartEndDate = (
  range: string,
  startDate: Date,
  endDate: Date,
  customDays?: number
) => {
  let adjustedStart: Date;
  let adjustedEnd: Date;

  // Calculate the custom months difference if not provided
  if (!customDays) {
    customDays = calculateCustomMonths(startDate, endDate);
  }

  adjustedStart = new Date(startDate);
  adjustedEnd = new Date(startDate);

  switch (range) {
    case "today":
      adjustedStart = new Date(startDate);
      adjustedEnd.setDate(adjustedEnd.getDate() - 1);
      break;

    case "week":
      adjustedStart = new Date(startDate);
      adjustedStart.setDate(startDate.getDate() - 7);
      adjustedEnd = new Date(startDate);
      adjustedEnd.setDate(adjustedEnd.getDate() - 1);
      break;

    case "month":
      adjustedStart = new Date(startDate);
      adjustedStart.setMonth(startDate.getMonth() - 1);
      adjustedEnd = new Date(startDate);
      adjustedEnd.setDate(adjustedEnd.getDate() - 1);
      break;

    case "year":
      adjustedStart = new Date(startDate);
      adjustedStart.setFullYear(startDate.getFullYear() - 1);
      adjustedEnd = new Date(startDate);
      adjustedEnd.setDate(adjustedEnd.getDate() - 1);
      break;

    case "custom":
      // Subtract custom months from the startDate
      adjustedStart = new Date(startDate);
      adjustedStart.setMonth(startDate.getMonth() - customDays);

      // Adjust the end date to be exactly one day before the start date
      adjustedEnd = new Date(startDate);
      adjustedEnd.setDate(adjustedEnd.getDate() - 1);
      
      break;

    default:
      throw new Error("Invalid range. Valid ranges are 'custom'.");
  }

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return {
    adjustedStart: formatDate(adjustedStart),
    adjustedEnd: formatDate(adjustedEnd),
  };
};





