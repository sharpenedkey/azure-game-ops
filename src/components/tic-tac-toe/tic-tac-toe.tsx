import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import { showRootComponent } from "../../common";

class TicTacToe extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public componentDidMount() {
    SDK.init();
  }

  public render(): JSX.Element {
    return (
      <Page className="tic-tac-toe flex-grow">
        <Header title="WIP" titleSize={TitleSize.Large} />
      </Page>
    );
  }
}

showRootComponent(<TicTacToe />);
