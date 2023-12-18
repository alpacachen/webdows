import { defineConfig } from "unocss";
import type { StaticRule } from "unocss";

export const customCssRules: StaticRule[] = [
    ["bg-deep", { "background-color": "#2B66BA" }],
    [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        /^text-(\d+)/,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ([, fontSize]) => {
            return {
                "font-size": fontSize + "px",
                "line-height": +fontSize + 8 + "px",
            };
        },
    ],
    [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        /^(-?)(m|p)(t|b|l|r)?-(\d+(\.\d+)?)$/,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ([, operator, pm, direction, number]) => {
            const value = `${operator ?? ""}${number * 4}px`;
            let rule = "";
            if (pm === "p") {
                rule += "padding";
            } else {
                rule += "margin";
            }
            switch (direction) {
                case "t":
                    rule += "-top";
                    break;
                case "b":
                    rule += "-bottom";
                    break;
                case "l":
                    rule += "-left";
                    break;
                case "r":
                    rule += "-right";
                    break;
            }
            return { [rule]: value };
        },
    ],
    [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        /^(-?)(m|p)(x|y)?-(\d+(\.\d+)?)$/,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ([, operator, pm, direction, number]) => {
            const value = `${operator ?? ""}${number * 4}px`;
            let rule1 = "";
            let rule2 = "";
            if (pm === "p") {
                rule1 += "padding";
                rule2 += "padding";
            } else {
                rule1 += "margin";
                rule2 += "margin";
            }
            switch (direction) {
                case "x":
                    rule1 += "-left";
                    rule2 += "-right";
                    break;
                case "y":
                    rule1 += "-top";
                    rule2 += "-bottom";
                    break;
            }
            return { [rule1]: value, [rule2]: value };
        },
    ],
];

export default defineConfig({
    rules: customCssRules,
});
