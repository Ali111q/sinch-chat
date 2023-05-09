import TextMessage from './TextMessage'
import ImgMessage from './ImgMessage'
import TimeMessage from './TimeMessage'
import VoiceMessage from './VoiceMessage'
import ReplayMessage from './ReplayMessage'
import VideoMessage from './VideoMessage'
import { useCallback } from 'react'
const Message = ({ type, data }) => {

    switch (type) {
      case 5: 
        if(data.forward.type === 1){
          return <TextMessage data={data} />
        } else if(data.forward.type === 2){
          return <ImgMessage data={data} />
        }else if(data.forward.type === 3){
          return <VideoMessage data={data} />
        } else if(data.forward.type === 6){
          return <VoiceMessage data={data} />
        }
      case 1:
        return data.reply ?  <ReplayMessage data={data} /> : <TextMessage data={data} />;
      case 2:
        return <ImgMessage data={data} />;
      case 20:
        return <TimeMessage data={data} />;
      case 6:
        return <VoiceMessage data={data} />;
      case 3:
        return <VideoMessage data={data} />;
      default:
        return;
    }
  };

  export default Message