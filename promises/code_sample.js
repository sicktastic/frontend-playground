module.exports = function () {
  return init()
    .then(copyRuntime)
    .then(cleanupRuntime)
    .then(packageBuiltApp)
    .then(finalize)
    .then(renameApp)
    .then(createInstaller)
    .then(cleanClutter)
    .catch(console.error);
};
