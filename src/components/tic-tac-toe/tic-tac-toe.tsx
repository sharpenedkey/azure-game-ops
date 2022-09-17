import "./tic-tac-toe.scss";

import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import Game from "./game";

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
        <Header title="Tic-Tac-Toe" titleSize={TitleSize.Large} />
        <div className="page-content page-content-top flex-column rhythm-vertical-16">
          <Game />
        </div>
      </Page>
    );
  }
}

showRootComponent(<TicTacToe />);
