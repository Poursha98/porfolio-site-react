import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
// import GroupIcon from '@mui/icons-material/Group';
function Experience() {
    return (
        <div className='experience container'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='1/1/1 to 3/3/3' iconStyle={{background:'#3e497a',color:'#fff'}}
                icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>Your University</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Bachelor's degree for example</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                                         date='3/3/3 to 5/5/5' iconStyle={{background:'#3e497a',color:'#fff'}}
                                         icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>Your Other University</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Master's degree for example</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                                         date='1/1/1 to 3/3/3' iconStyle={{background:'#0BB016FF', color:'#fff'}}
                                         icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>Your University</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Master's degree for example</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
