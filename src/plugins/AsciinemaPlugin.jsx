/**
 * This file is Asciinema player for react-page plugin file.
 */

import React, { useCallback, useEffect, useState } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { css } from "@emotion/css";

const demoUrl = "https://asciinema.org/a/335480.cast";

var AsciinemaPlayer = null;

const AsciinemaWrapper = (props) => {
  const [player, setPlayer] = useState(null);
  const { url, id , zoomable} = props;

  // the `id` is different between each asciinema player cell unit.
  const getContainerId = () => `#asciinema-player-${id}`;

  const getContainer = () => document.querySelector(getContainerId());

  const cleanPlayerContainerContent = () => {
    let container = getContainer();
    if (container) {
      container.innerHTML = "";
    }
  };
  

  // optimize the load module.
  const loadedmodule = useCallback(
    () => require("asciinema-player"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, id]
  );

  useEffect(() => {
    AsciinemaPlayer = player ? player : loadedmodule();

    if (url?.endsWith(".cast")) {
      setTimeout(() => {
        // use fetch to determine the url is valid resource
        fetch(url)
          .then(() => {
            /*
             * eachtime the url changed, clean the content of player container
             */
            cleanPlayerContainerContent();
            let playerInstance = AsciinemaPlayer?.create(
              url !== undefined ? url : demoUrl,
              getContainer(),
              {
                autoplay: true,
                loop: true,
              }
            );
            setPlayer(playerInstance);
          })
          .catch((e) => {
            cleanPlayerContainerContent();
          });
        }, 1500);
      }
    // eslint-disable-next-line camelcase, react-hooks/exhaustive-deps
  }, [props.url]);
  
  return (
    <div>
      {url !== demoUrl && (
        <div
          id={"asciinema-player-" + id}
          className={css`
            border-radius: 10px;
            transition: all 1.2s;
            overflow: hidden;
            &:hover{
              transform: scale(${!!zoomable ?  1.2 : 1.0});
            }
          `}
        ></div>
      )}
    </div>
  );
};

const asciinemaPlugin = {
  id: "asiinema-player/plugin",
  title: "asciinema-player",
  Renderer: ({ nodeId, data }) => {
    console.log('[DEBUG]: nodeId: ', nodeId);
    return (
      <div>
        <p>Asciinema-player plugin version: 1.0</p>
        <div id="asciinema-player-container">
          <AsciinemaWrapper url={data?.url} id={nodeId} zoomable/>
        </div>
      </div>
    );
  },
  version: 1,
  controls: {
    columnCount: 1,
    type: "autoform",
    schema: {
      properties: {
        url: {
          type: "string",
        },
      },
    },
  },
};

export default asciinemaPlugin;