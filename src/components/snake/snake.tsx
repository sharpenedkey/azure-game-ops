import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import Game from "./elements/game";

import { showRootComponent } from "../../common";

class Snake extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public componentDidMount() {
    SDK.init();
  }

  public render(): JSX.Element {
    return (
      <Page className="snake flex-grow">
        <Header title="Snake" titleSize={TitleSize.Large} />
        <div className="page-content page-content-top flex-column rhythm-vertical-16">
          <Game />
        </div>
      </Page>
    );
  }
}

showRootComponent(<Snake />);
