import { Link } from 'gatsby'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { globalContext } from '../../wrap-with-provider'
import Frame from '../components/frame'

const NeedLogin = () => {

    const { setIsTourOpen } = useContext(globalContext);

    useEffect(() => {
        setIsTourOpen(true)
    }, []);

    return (
        <Frame>
            <div className='flex flex-col justify-center items-center gap-12 p-48 xs:p-12'>
                <h4 className="text-purple-600">你需要登录到系统中，方能访问此功能</h4>

                <div className="flex gap-20">
                    <Link to="/" className='text-gray-500 font-bold text-sm'>返回到首页</Link>
                    <Link to="/login" className='text-purple-500 font-bold text-sm'>登录</Link>
                </div>
            </div>
        </Frame>
    )
}

export default NeedLogin