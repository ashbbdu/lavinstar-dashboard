export const getExtendedStartEndDate = (range: string, startDate: Date , endDate : Date) => {
    let adjustedStart: Date;
    let adjustedEnd: Date = new Date(endDate); 

    switch (range) {
        case "today":
            adjustedStart = new Date(startDate);
            adjustedEnd.setDate(adjustedEnd.getDate() - 1);
            break;

        case "week":
            adjustedStart = new Date(startDate);
            adjustedStart.setDate(startDate.getDate() - 7);
            adjustedEnd.setDate(adjustedEnd.getDate() - 7); 
            break;

        case "month":
            adjustedStart = new Date(startDate);
            adjustedStart.setMonth(startDate.getMonth() - 1); 
            adjustedEnd.setMonth(adjustedEnd.getMonth() - 1);
            break;

        case "year":
            adjustedStart = new Date(startDate);
            adjustedStart.setFullYear(startDate.getFullYear() - 1); 
            adjustedEnd.setFullYear(adjustedEnd.getFullYear() - 1);
            break;

        default:
            throw new Error("Invalid range. Valid ranges are 'today', 'week', 'month', or 'year'.");
    }

    adjustedEnd.setDate(adjustedEnd.getDate() - 1);

    const formatDate = (date: Date) => date.toISOString().split('T')[0]; 
    console.log(formatDate(adjustedStart) ,  formatDate(adjustedEnd) , "all dates");
    
    return {
        adjustedStart: formatDate(adjustedStart),
        endDate: formatDate(adjustedEnd)
    };
};