import React from 'react'
import AsciinemaEditor from '../components/asciinema/AsciinemaEditor'

import Frame from '../components/frame'

const MarkdownReactPage = () => {
    return (

        <Frame >

            <div className="flex flex-col gap-8">

                <div>MarkdownReactPage</div>
                <div>
                    <AsciinemaEditor />
                </div>
            </div>
        </Frame>
    )
}

export default MarkdownReactPage