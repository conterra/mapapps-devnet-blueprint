///
/// Copyright (C) 2025 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

/*
 * Copyright (C) con terra GmbH
 */
import { Locator, Page } from "@playwright/test";
import { waitForMap } from "./testUtils";

export class MapCanvas {
    readonly canvas: Locator;
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        this.canvas = page.locator("canvas");
    }

    async clickOnMap(location: any): Promise<void> {
        await this.canvas.click({ position: location });
    }

    async drawLine(from: any, to: any): Promise<void> {
        await this.canvas.click({ position: from });
        await this.canvas.dblclick({ position: to });
    }

    async drawRectangle(rectangle: any): Promise<void> {
        await this.page.mouse.move(rectangle.left, rectangle.top);
        await this.page.mouse.down();
        await this.page.waitForTimeout(100);
        await this.page.mouse.move(
            rectangle.left + rectangle.width,
            rectangle.top + rectangle.height
        );
        await this.page.mouse.up();
        await this.page.waitForTimeout(100);
    }

    async loaded(): Promise<void> {
        await waitForMap(this.page);
    }
}
