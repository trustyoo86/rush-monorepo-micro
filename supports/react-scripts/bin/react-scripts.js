process.on("unhandledRejection", (err) => {
  throw err;
});

const spawn = require("react-dev-utils/crossSpawn");
const args = process.argv.slice(2);

const scriptIndex = args.findIndex((x) => x === "lint" || x === "lint-staged");

const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if (["lint", "lint-staged"].includes(script)) {
  const result = spawn.sync(
    process.execPath,
    nodeArgs
      .concat(require.resolve("../scripts/" + script))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: "inherit" }
  );

  if (result.signal) {
    process.exit(1);
  }
  process.exit(result.status);
} else {
  console.log('Unknown script "' + script + '"');
}
