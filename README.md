The contents of this repository only really apply to this one usecase (hosting suprem.io tournaments).
The underlying code is janky and could probably be better, but for a first project using JS I don't think it's too bad.

To use this, you will need to append the following to the URL:
`?theme=<theme>&key=<key>`

`<theme>` should be one of the following:
- amethyst (purple)
- emerald (green)
- ruby (red)
- sapphire (blue)

`<key>` should be a Google API key which you generate by going to https://console.cloud.google.com/apis/credentials, clicking on "Create credentials" and then "API key". Any key should work as long as it has access to the Google Sheets API.

The Google Sheets file thing this uses: https://docs.google.com/spreadsheets/d/1rI1f7s0MmXKaksf_ii1mug-XtkBtbxcXaGT-C0K71lo/edit
