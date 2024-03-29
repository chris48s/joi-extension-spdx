"use strict";

const Joi = require("joi");
const ids = require("spdx-license-ids");
const deprecatedIds = require("spdx-license-ids/deprecated");

const extensionName = "spdx";

const SpdxExtension = {
  base: Joi.string(),
  type: "spdx",
  validate: function (value, { error }) {
    return ids.includes(value) || deprecatedIds.includes(value)
      ? { value }
      : { errors: error(`${extensionName}.valid`) };
  },
  messages: {
    [`${extensionName}.valid`]: "{{#label}} must be a valid SPDX identifier",
    [`${extensionName}.current`]:
      "{{#label}} must be a current SPDX identifier",
    [`${extensionName}.deprecated`]:
      "{{#label}} must be a deprecated SPDX identifier",
  },
  rules: {
    current: {
      method() {
        return this.$_addRule("current");
      },
      validate(value, helpers) {
        return ids.includes(value)
          ? value
          : helpers.error(`${extensionName}.current`);
      },
    },
    deprecated: {
      method() {
        return this.$_addRule("deprecated");
      },
      validate(value, helpers) {
        return deprecatedIds.includes(value)
          ? value
          : helpers.error(`${extensionName}.deprecated`);
      },
    },
  },
};

module.exports = { spdx: SpdxExtension };
