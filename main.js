import antlr4 from "antlr4";

import PScriptLexer from "./generate/PScriptLexer.js";
import PScriptParser from "./generate/PScriptParser.js";
import PScriptParserVisitor from "./generate/PScriptParserVisitor.js";

const input = "var x = { a: 1, b:2 }";
// const input = "var b = (2,3); b = 1;";
const chars = new antlr4.InputStream(input);
const lexer = new PScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PScriptParser(tokens);
const ctx = parser.program();
const vistor = new PScriptParserVisitor();
vistor.visitProgram(ctx);
