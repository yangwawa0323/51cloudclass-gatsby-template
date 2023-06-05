import { Typography } from '@mui/material';
import React from 'react'
import Frame from '../components/frame'
import { easeIn } from '../utils/animate';
import { purple } from '@mui/material/colors';

const Copyright = () => {
    React.useEffect(() => {
        easeIn('.gsap-copyright')
    }, [])

    return (
        <Frame>
            <div className="p-20 flex flex-col gap-20 min-h-[60vh]">

                <h2>版权申明</h2>
                <div className='gsap-copyright text-xl leading-[32px]'>
                    本网站所有视频都为原创视频，长沙云课堂域名只有
                    <Typography variant="body1" color={purple[600]}>
                        <a href="51cloudclass.com">51cloudclass.com</a> 和
                        <a href="5117xue.com">5117xue.com</a>
                    </Typography>
                    所有视频均不设其他以外站点，如有录制视频转发到其他平台，经举报后会和平台联系，我们将保留诉讼的法律权益。
                </div>
            </div>
        </Frame>
    )
}

export default Copyright