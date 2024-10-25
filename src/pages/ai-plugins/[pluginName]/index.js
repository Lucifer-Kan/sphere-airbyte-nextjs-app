import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import axios from "src/utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContainer } from "components/styles/PluginStyles";
// import Navbar from "../../components/Navbar";
import Head from "next/head";
import PluginLoading from "components/components/PluginLoading";
import ShowPlugin from "components/components/ShowPlugin";

const Plugin = () => {
  const [pluginUrl, setPluginUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { pluginName } = router.query;
  const timeoutId = useRef(null);
  const poll = useRef(0);

  useEffect(() => {
    if (router.isReady) {
      const fetchData = async () => {
        try {
          const updatedPluginName = pluginName;
          const response = await axios.get(
            `/ai-plugins/${updatedPluginName}?poll_count=${poll.current}`
          );
          if (response.data) {
            setPluginUrl(response.data);
            setLoading(false);
            if (timeoutId.current) clearTimeout(timeoutId.current);
          } else {
            poll.current += 1;
            timeoutId.current = setTimeout(fetchData, 10000);
          }
        } catch (error) {
          toast.error("Something went wrong!", {
            autoClose: 2000,
          });
          console.log("error: ", error);
        }
      };

      if (pluginName) {
        fetchData();
      }
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [pluginName]); // Note that poll is removed from the dependencies.

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Failed to copy text!", {
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Head>
        <title>{`Generating${pluginName && " " + pluginName} AI Plugin`}</title>
      </Head>
      {/* <Navbar /> */}
      <ToastContainer />
      <MainContainer>
        {loading ? (
          <PluginLoading />
        ) : (
          <ShowPlugin
            plugin={pluginUrl}
            pluginName={pluginName}
            copyToClipboard={copyToClipboard}
          />
        )}
      </MainContainer>
    </>
  );
};

export default Plugin;
