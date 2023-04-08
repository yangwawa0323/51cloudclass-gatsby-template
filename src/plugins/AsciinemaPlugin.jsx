/**
 * This file is Asciinema player for react-page plugin file.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import Skeleton from "@mui/material/Skeleton";
import { debug, removeAllChildNodes } from "../utils/tools";

const demoUrl = "https://asciinema.org/a/335480.cast";

var AsciinemaPlayer = null;

const AsciinemaWrapper = (props) => {
  let containerRef = useRef(null);
  const { url, id } = props;
  const [loading, setLoading] = useState(true);

  const cleanPlayerContainerContent = () => {
    let container = containerRef?.current;
    if (container) {
      // AsciinemaPlayer = null;  // recycle the AsciinemaPlayer
      removeAllChildNodes(container);
    }
  };

  // optimize the load module. This is OK.
  const loadedmodule = useCallback(
    () => require("asciinema-player"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, id]
  );

  const initial = () => {
    cleanPlayerContainerContent();

    setTimeout(() => {
      AsciinemaPlayer?.create(url, containerRef.current, {
        autoplay: true,
        loop: true,
        fit: "height",
      });

    }, 1000);

    setTimeout(() => setLoading(false), 2500);
  };

  useEffect(() => {
    AsciinemaPlayer = loadedmodule();

    debug(url);
    if (url?.endsWith(".cast")) {
      initial();
    }
    // eslint-disable-next-line camelcase, react-hooks/exhaustive-deps
  }, [props.url, props.id]);

  return (
    <div>
      {url !== demoUrl && (
        <div
          ref={containerRef}
          id={"asciinema-player-" + id}
          style={{
            borderRadius: "10px",
            // transition: "transform 1.2s",
            overflow: "hidden",
            // width: loading ? "0px" : "400px",
            height: loading ? "0px" : "400px",
          }}
        ></div>
      )}
      {loading && (
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
      )}
    </div>
  );
};

//===============================================================
// Pass test below.
const asciinemaPlugin = {
  id: "asiinema-player/plugin",
  title: "asciinema-player",
  Renderer: ({ nodeId, data }) => {
    return (
      <div className="flex gap-2 flex-col">
        <div id="asciinema-player-container">
          <AsciinemaWrapper url={data?.url} id={nodeId} />
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
