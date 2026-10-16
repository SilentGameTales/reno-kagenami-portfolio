ASTRA NOCTRYA ATLAS — IMPERIAL / VERDANT MAP FIX

This patch corrects the two swapped map image assets:
- Imperial Heartlands now loads the Imperial Heartlands map.
- Verdant Shard now loads the Verdant Shard map.

Copy the contents of this folder into the root of your reno-kagenami-portfolio project and allow Windows to replace the two existing image files.

Then run:
npm run build

git add public/images/astra-maps/imperial-heartlands.png public/images/astra-maps/verdant-shard.png
git commit -m "Fix Imperial Heartlands and Verdant Shard atlas maps"
git push
