import React from "react";
import {render} from "react-dom";
import {RecoilRoot} from "recoil/dist";

import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css"

render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.getElementById("root")
);