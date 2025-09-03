import './App.css'
import Button from './component/button';
import Header from './component/Header'
import Section from './component/Section'
import Images from './component/images';
import Image2 from './component/image2';
import WorkflowItems from './component/WorkflowItems';
import Websection from './component/websection';


function App() {


  return (
    <>
      <div>
        <Header />
      </div>

      <div style={{ marginTop: "3%" }}>
        <Section
          title="A History Of Everything You Copy"
          subtitle="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1%",
        }}
      >
        <Button text="Download for iOS" color="rgb(37, 187, 164)" />
        <Button text="Download for Mac" color="rgb(138, 149, 251)" />
      </div>

      <div style={{ marginTop: "5%" }}>
        <Section
          title="Keep track of your snippets"
          subtitle="Clipboard instantly stores any item you copy in the cloud, making it easy to access from anywhere."
        />
      </div>
      <div className="container">
        <div className="image-section">
          <Images />
        </div>

        <div className="text-section" style={{ marginTop: "5%" }}>
          <Section
            title="Quick Search"
            subtitle="Easily search your snippets by content, category, web address, application, and more"
          />
          <Section
            title="iCloud Sync"
            subtitle="Instantly saves and syncs snippets across all your devices."
          />
          <Section
            title="Complete History"
            subtitle="Retrieve snippets from the first moment you started using the app."
          />
        </div>
      </div>

      <div style={{ marginTop: "10%" }}>
        <Section
          title="Access Clipboard Anywhere"
          subtitle="Whether you're on the go, or in your computer, you can access all your clipboard snippet in a few in a few simple clicks  "
        />
      </div>

      <div
        style={{
          marginTop: "5%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Image2 />
      </div>

      <div>
        <Section
          title="Supercharge your workflow"
          subtitle="We've got your tools to boost your productivity "
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
          gap: "1rem",
        }}
      >
        <div style={{}}>
          <WorkflowItems
            image="../src/assets/icon-blacklist.svg"
            title="Create blacklists"
            subtitle="Ensure sensitive information never makes its way to your clipboard."
          />
        </div>

        <div>
          <WorkflowItems
            image="../src/assets/icon-text.svg"
            title="Plain text snippets"
            subtitle="Remove unwanted formatting for a consistent look."
          />
        </div>

        <div>
          <WorkflowItems
            image="../src/assets/icon-preview.svg"
            title="Sneak preview"
            subtitle="Quick preview of all snippets for easy access."
          />
        </div>
      </div>

      
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
            gap: "3rem",
          }}
        >
            <Websection icon="../src/assets/logo-google.png" />
            <Websection icon="../src/assets/logo-ibm.png" />
            <Websection icon="../src/assets/logo-microsoft.png" />
            <Websection icon="../src/assets/logo-hp.png" />
          
        </div>

        <div style={{ marginTop: "5%" }}>
        <Section
          title="Clipboard for iOS and Mac OS "
          subtitle="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1%",
        }}
      >
        <Button text="Download for iOS" color="rgb(37, 187, 164)" />
        <Button text="Download for Mac" color="rgb(138, 149, 251)" />
      </div>

    </>
  );
}

export default App
