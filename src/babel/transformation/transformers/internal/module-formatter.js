import * as strict from "../../helpers/strict";

export function Program(program, parent, scope, file) {
  if (!file.transformers["es6.modules"].canRun()) return;

  strict.wrap(program, function () {
    program.body = file.dynamicImports.concat(program.body);
  });

  if (file.moduleFormatter.transform) {
    file.moduleFormatter.transform(program);
  }
}
