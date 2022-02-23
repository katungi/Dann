Dann.logDefaults = function logDefaults() {
  return {
    struct: true,
    misc: true,
    weights: false,
    gradients: false,
    errors: false,
    layers: false,
    table: false,
    decimals: undefined,
    details: false,
  };
};

Dann.ffwDefaults = function ffwDefaults() {
  return {
    log: false,
    table: false,
    decimals: undefined,
    asLabel: false,
  };
};

Dann.bckDefaults = function bckDefaults() {
  return {
    log: false,
    mode: 'cpu',
    table: false,
    dropout: undefined,
  };
};
