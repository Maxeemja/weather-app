const useGetDate = () => {
    const today = new Date();
    const day = today.getUTCDate();
    const month = today.getUTCMonth();
    const getWeekDay = (day = today.getUTCDay()) => { 
        switch (day) {
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            case 0:
                return 'Sun';
            default:
                return 'Error'
        }
    }
    const getMonth = () => {
        switch (month + 1) {
            case 1:
                return 'Jan';
            case 2:
                return 'Feb';
            case 3:
                return 'Mar';
            case 4:
                return 'Apr';
            case 5:
                return 'May';
            case 6:
                return 'Jun';
            case 7:
                return 'Jul';
            case 8:
                return 'Aug';
            case 9:
                return 'Sep';
            case 10:
                return 'Oct';
            case 11:
                return 'Nov';
            case 12:
                return 'Dec';
            default:
                return 'Error!'; 
        }
    }
    return {getWeekDay, getMonth, day}

}
export default useGetDate;
