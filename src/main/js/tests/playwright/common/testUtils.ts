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
import { expect, Locator, Page } from "@playwright/test";

/**
 * Allows to test if a screenshot matches an expected screenshot using custom timeouts and intervals.
 */
export async function expectToMatchScreenshot(
    element: Page | Locator,
    screenshotName: string,
    options?: { timeout?: number, intervals?: number[] }
): Promise<void> {
    await expect(async () => {
        await expect(element).toHaveScreenshot(screenshotName);
    }).toPass({
        ... options
    });
}

/**
 * Waits until the div with the class "map__loading-info" is not loading anymore.
 */
export async function waitForMap(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => {
        const loadingInfo = document.querySelector(".map__loading-info");
        if (!loadingInfo) {
            return false;
        }
        return !loadingInfo.classList.contains("map__loading-info--is-loading");
    });
}
