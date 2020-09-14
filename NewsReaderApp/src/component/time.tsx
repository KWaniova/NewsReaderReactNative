import * as React from 'react';
import  {Text} from 'native-base';
import moment from 'moment';

export interface TimeProps {
    publishedAt: any
}
 
const Time: React.SFC<TimeProps> = ({publishedAt}) => {
    const [date, setData]=React.useState(publishedAt)
    const time = moment(date).fromNow(true);
    return (  
        <Text numberOfLines={1} note style={{marginHorizontal: 10}}>{time} ago</Text>
    );
}
 
export default Time;