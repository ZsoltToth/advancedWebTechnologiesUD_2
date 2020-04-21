import dispatcher from '../LotteryDispatcher'

class LotteryActions{

    generatePicks(min, max, pickCnt){
        dispatcher.handleViewAction({
           actionType : 'GENERATE_PICKS',
           payload : {
               min : min,
               max : max,
               pickCnt : pickCnt
           }
        });
    }
}

export default new LotteryActions();
