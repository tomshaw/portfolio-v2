// ==========================================================================
// Base configuration.
// ==========================================================================

const config = {
    someSetting: true
};

module.exports = {
    get(key) {
        return config[key];
    },
    set(key, value) {
        config[key] = value;
    }
};
