import traverse from 'traverse'

export const debug = (message) => {
    console.log(`%c[51cloudclass]:`, 'color: green; background: yellow; font-size: 14px');
    console.log(message);
}

export const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export const getTitle = (nodeContent) => {
    let title = '', found = false;
    traverse(nodeContent).forEach(function (obj) {
        let walkObj = obj;
        if (found) return
        if (obj instanceof Object && obj.hasOwnProperty('dataI18n')) {
            walkObj = walkObj.dataI18n
            if (walkObj.hasOwnProperty("default")) {
                walkObj = walkObj.default
                if (walkObj.hasOwnProperty("slate")) {
                    walkObj = walkObj.slate
                    if (walkObj instanceof Array) {
                        // use every to replace the forEach, every will break immidately the code block returns
                        walkObj.every((wlk, idx) => { 
                            if (wlk.type.startsWith('HEADINGS')) {
                                found = true;
                                title = wlk.children[0].text
                                console.log("DEBUG:", title)
                                return  // no need continue
                            }
                            
                        })
                    }

                }
            }
        }
    })
    return title
}