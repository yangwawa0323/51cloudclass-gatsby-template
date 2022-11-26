/**
 * This file is Asciinema player for react-page plugin file.
 */

import React, { useCallback, useEffect, useState } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
// import Skeleton  from "@mui/material/Skeleton";
import { debug, removeAllChildNodes } from "../utils/tools";

const demoUrl = "https://asciinema.org/a/335480.cast";

var AsciinemaPlayer = null;

const AsciinemaWrapper = (props) => {
  let playerInstance;
  const [player, setPlayer] = useState(null);
  const { url, id } = props;
  // const [loading, setLoading] = useState(true);

  // the `id` is different between each asciinema player cell unit.
  const getContainerId = () => `#asciinema-player-${id}`;

  const getContainer = () => document.querySelector(getContainerId());

  const cleanPlayerContainerContent = () => {
    let container = getContainer();
    if (container) {
      removeAllChildNodes(container);
    }
  };

  // optimize the load module.
  const loadedmodule = useCallback(
    () => require("asciinema-player"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, id]
  );


  
  // const fetchAndInitial = () => {
  //   cleanPlayerContainerContent();
  //   debug("clean player container");
  //   fetch(url)
  //     .then((response) => {
  //       /*
  //        * eachtime the url changed, clean the content of player container
  //        */
  //       playerInstance = AsciinemaPlayer?.create(url, getContainer(), {
  //         autoplay: true,
  //         loop: true,
  //         fit: "height",
  //       });
  //       debug("set player");
  //       setPlayer(playerInstance);
  //       setTimeout(() => setLoading(false), 1500);
  //       debug("loaded.");
  //     })
  //     .catch((e) => {
  //       cleanPlayerContainerContent();
  //     });
  // };

  const initial = () => {
    cleanPlayerContainerContent();
    debug("clean player container");
    /*
     * eachtime the url changed, clean the content of player container
     */
    playerInstance = AsciinemaPlayer?.create(url, getContainer(), {
      autoplay: true,
      loop: true,
      fit: "height",
    });
    debug("set player");
    setPlayer(playerInstance);
    // setTimeout(() => setLoading(false), 1500);
    debug("loaded.");
  };

  useEffect(() => {
    AsciinemaPlayer = player ? player : loadedmodule();

    debug(url);
    if (url?.endsWith(".cast")) {
      // use fetch to determine the url is valid resource
      // TODO: slow network has problem
      // fetchAndInitial();

      // no testing just initial
      initial();
    }
    // eslint-disable-next-line camelcase, react-hooks/exhaustive-deps
  }, [props.url, props.id]);

  return (
    <div>
      {url !== demoUrl && (
        <div
          id={"asciinema-player-" + id}
          style={{
            borderRadius: "10px",
            transition: "transform 1.2s",
            overflow: "hidden",
            width: "400px",
            height:  "400px",
          }}
        ></div>
      )}
      {/* {loading && (
        <div>
          <Skeleton
            sx={{
              borderRadius: "10px",
            }}
            variant="rectangular"
            width={400}
            height={400}
          />
        </div>
      )} */}
    </div>
  );
};

const asciinemaPlugin = {
  id: "asiinema-player/plugin",
  title: "asciinema-player",
  Renderer: ({ nodeId, data }) => {
    // console.log('[DEBUG]: nodeId: ', nodeId);
    return (
      <div className="px-12 py-4 flex gap-2 flex-col">
        <div id="asciinema-player-container">
          <AsciinemaWrapper url={data?.url} id={nodeId} zoomable />
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
