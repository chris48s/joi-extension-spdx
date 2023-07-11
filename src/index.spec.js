"use strict";

const assert = require("assert");
const { spdx } = require(".");
const Joi = require("joi").extend(spdx);

describe("joi-extension-spdx", function () {
  describe("valid", function () {
    it("accepts valid identifiers", function () {
      assert.strictEqual(
        Joi.attempt("BSD-3-Clause", Joi.spdx()),
        "BSD-3-Clause",
      );
      assert.strictEqual(Joi.attempt("AGPL-1.0", Joi.spdx()), "AGPL-1.0");
    });

    it("rejects invalid identifiers", function () {
      assert.throws(() => Joi.attempt("foobar", Joi.spdx()), {
        name: "ValidationError",
        message: '"value" must be a valid SPDX identifier',
      });
    });
  });

  describe("current", function () {
    it("accepts current identifiers", function () {
      assert.strictEqual(
        Joi.attempt("BSD-3-Clause", Joi.spdx().current()),
        "BSD-3-Clause",
      );
    });

    it("rejects deprecated identifiers", function () {
      assert.throws(() => Joi.attempt("AGPL-1.0", Joi.spdx().current()), {
        name: "ValidationError",
        message: '"value" must be a current SPDX identifier',
      });
    });
  });

  describe("deprecated", function () {
    it("accepts deprecated identifiers", function () {
      assert.strictEqual(
        Joi.attempt("AGPL-1.0", Joi.spdx().deprecated()),
        "AGPL-1.0",
      );
    });

    it("rejects current identifiers", function () {
      assert.throws(
        () => Joi.attempt("BSD-3-Clause", Joi.spdx().deprecated()),
        {
          name: "ValidationError",
          message: '"value" must be a deprecated SPDX identifier',
        },
      );
    });
  });
});
