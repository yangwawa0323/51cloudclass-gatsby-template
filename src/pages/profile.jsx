import { getAccount } from '51cloudclass-utilities/src/account';
import { getRidOfDomain, getUrlParameter } from '51cloudclass-utilities/src/utils';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Frame from '../components/frame';
import ProfileContextProvider from '../components/profile/ProfileContextProvider';
import Sidebar from '../components/profile/Sidebar';
import { needLoginWrapper } from '../hooks';
import { easeIn } from '../utils/animate';


const Profile = () => {

    const [open, setOpen] = useState(false);

    const [topStyle, setTopStyle] = useState('NoHair')

    const account = getAccount()

    const avatar = useSelector(state => state.auth.account?.avatar)
    const avatarParam = getUrlParameter(getRidOfDomain(avatar))

    const closeDialog = (event, reason) => {
        if (reason === "escapeKeyDown" || reason === "backdropClick") return
        setOpen(false);
    }

    const openDialog = () => {
        // navigate(`/avatar/${avatarParam}`, { partiallyActive: true })
        navigate(`/avatar/${avatarParam}`)
        setOpen(true)
    }


    useEffect(() => {
        easeIn('.gsap-sidebar.profile', { delay: 0.3 })
    }, []);

    const extraContext = {
        open,
        closeDialog,
        openDialog,


        topStyle,
        setTopStyle,
    }


    return (
        <Frame>
            <ProfileContextProvider extraContext={extraContext}>
                <div className="flex w-full flex-row gap-12 justify-start py-16 max-w-xl items-center min-h-[calc(100vh-400px)]">
                    <Sidebar />
                    <div>

                    </div>
                </div>
            </ProfileContextProvider>
        </Frame>
    )
}

export default needLoginWrapper(Profile)