import { transformerDirectives } from "unocss";
import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
	presets: [presetWind3()],
	transformers: [transformerDirectives()],
});
