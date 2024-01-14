// Generated from PScriptParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from "antlr4";
import PScriptParser from "./PScriptParser.js";
import * as PScriptType from "./PScriptType.js";

// This class defines a complete generic visitor for a parse tree produced by PScriptParser.

export default class PScriptParserVisitor extends antlr4.tree.ParseTreeVisitor {
  constructor() {
    super();
    this.variables = {};
  }
  // Visit a parse tree produced by PScriptParser#program.
  visitProgram(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#sourceElement.
  visitSourceElement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#statement.
  visitStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#block.
  visitBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#statementList.
  visitStatementList(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importStatement.
  visitImportStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importFromBlock.
  visitImportFromBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importModuleItems.
  visitImportModuleItems(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importAliasName.
  visitImportAliasName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#moduleExportName.
  visitModuleExportName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importedBinding.
  visitImportedBinding(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importDefault.
  visitImportDefault(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importNamespace.
  visitImportNamespace(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#importFrom.
  visitImportFrom(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#aliasName.
  visitAliasName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ExportDeclaration.
  visitExportDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ExportDefaultDeclaration.
  visitExportDefaultDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#exportFromBlock.
  visitExportFromBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#exportModuleItems.
  visitExportModuleItems(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#exportAliasName.
  visitExportAliasName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#declaration.
  visitDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#variableStatement.
  visitVariableStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#variableDeclarationList.
  visitVariableDeclarationList(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#variableDeclaration.
  visitVariableDeclaration(ctx) {
    const v = this.visitChildren(ctx);
    this.variables[v[0]] = v[2];
  }

  // Visit a parse tree produced by PScriptParser#emptyStatement_.
  visitEmptyStatement_(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#expressionStatement.
  visitExpressionStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ifStatement.
  visitIfStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#DoStatement.
  visitDoStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#WhileStatement.
  visitWhileStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ForStatement.
  visitForStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ForInStatement.
  visitForInStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ForOfStatement.
  visitForOfStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#varModifier.
  visitVarModifier(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#continueStatement.
  visitContinueStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#breakStatement.
  visitBreakStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#returnStatement.
  visitReturnStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#yieldStatement.
  visitYieldStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#withStatement.
  visitWithStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#switchStatement.
  visitSwitchStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#caseBlock.
  visitCaseBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#caseClauses.
  visitCaseClauses(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#caseClause.
  visitCaseClause(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#defaultClause.
  visitDefaultClause(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#labelledStatement.
  visitLabelledStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#throwStatement.
  visitThrowStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#tryStatement.
  visitTryStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#catchProduction.
  visitCatchProduction(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#finallyProduction.
  visitFinallyProduction(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#debuggerStatement.
  visitDebuggerStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#classDeclaration.
  visitClassDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#classTail.
  visitClassTail(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#classElement.
  visitClassElement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#methodDefinition.
  visitMethodDefinition(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#fieldDefinition.
  visitFieldDefinition(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#classElementName.
  visitClassElementName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#privateIdentifier.
  visitPrivateIdentifier(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#formalParameterList.
  visitFormalParameterList(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#formalParameterArg.
  visitFormalParameterArg(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#lastFormalParameterArg.
  visitLastFormalParameterArg(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#functionBody.
  visitFunctionBody(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#sourceElements.
  visitSourceElements(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#arrayLiteral.
  visitArrayLiteral(ctx) {
    const v = this.visitChildren(ctx);
    return v[1];
  }

  // Visit a parse tree produced by PScriptParser#elementList.
  visitElementList(ctx) {
    let ret = [];
    for (const c of ctx.children) {
      if (c.ruleIndex == PScriptParser.RULE_arrayElement) {
        ret.push(c.accept(this));
      }
    }
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#arrayElement.
  visitArrayElement(ctx) {
    const v = this.visitChildren(ctx);
    return v[0];
  }

  // Visit a parse tree produced by PScriptParser#PropertyExpressionAssignment.
  visitPropertyExpressionAssignment(ctx) {
    const v = this.visitChildren(ctx);
    return v;
  }

  // Visit a parse tree produced by PScriptParser#ComputedPropertyExpressionAssignment.
  visitComputedPropertyExpressionAssignment(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#FunctionProperty.
  visitFunctionProperty(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PropertyGetter.
  visitPropertyGetter(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PropertySetter.
  visitPropertySetter(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PropertyShorthand.
  visitPropertyShorthand(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#propertyName.
  visitPropertyName(ctx) {
    const v = this.visitChildren(ctx);
    return v[0];
  }

  // Visit a parse tree produced by PScriptParser#arguments.
  visitArguments(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#argument.
  visitArgument(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#expressionSequence.
  visitExpressionSequence(ctx) {
    const v = this.visitChildren(ctx);
    return v;
  }

  // Visit a parse tree produced by PScriptParser#TemplateStringExpression.
  visitTemplateStringExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#TernaryExpression.
  visitTernaryExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#LogicalAndExpression.
  visitLogicalAndExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PowerExpression.
  visitPowerExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PreIncrementExpression.
  visitPreIncrementExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ObjectLiteralExpression.
  visitObjectLiteralExpression(ctx) {
    const v = this.visitChildren(ctx)[0];
    const ret = {};
    for (let i = 0; i < v.length; i++) {
      ret[v[i][0]] = v[i][2];
    }
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#MetaExpression.
  visitMetaExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#InExpression.
  visitInExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#LogicalOrExpression.
  visitLogicalOrExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#OptionalChainExpression.
  visitOptionalChainExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#NotExpression.
  visitNotExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PreDecreaseExpression.
  visitPreDecreaseExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ArgumentsExpression.
  visitArgumentsExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#AwaitExpression.
  visitAwaitExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ThisExpression.
  visitThisExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#FunctionExpression.
  visitFunctionExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#UnaryMinusExpression.
  visitUnaryMinusExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#AssignmentExpression.
  visitAssignmentExpression(ctx) {
    const v = this.visitChildren(ctx);
    this.variables[v[0]] = v[2];
  }

  // Visit a parse tree produced by PScriptParser#PostDecreaseExpression.
  visitPostDecreaseExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#TypeofExpression.
  visitTypeofExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#InstanceofExpression.
  visitInstanceofExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#UnaryPlusExpression.
  visitUnaryPlusExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#DeleteExpression.
  visitDeleteExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ImportExpression.
  visitImportExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#EqualityExpression.
  visitEqualityExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#BitXOrExpression.
  visitBitXOrExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#SuperExpression.
  visitSuperExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#MultiplicativeExpression.
  visitMultiplicativeExpression(ctx) {
    const v = this.visitChildren(ctx);
    const v0 = v[0];
    const v2 = v[2];
    const c1 = ctx.children[1];
    const op = c1.getSymbol();
    let ret = 0;
    switch (op.type) {
      case PScriptParser.Multiply: {
        ret = v0 * v2;
        break;
      }
      case PScriptParser.Divide: {
        ret = v0 / v2;
        break;
      }
      case PScriptParser.Modulus: {
        ret = v0 % v2;
        break;
      }
    }
    // const op = ctx.children[]
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#BitShiftExpression.
  visitBitShiftExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ParenthesizedExpression.
  visitParenthesizedExpression(ctx) {
    const v = this.visitChildren(ctx)[1];
    let ret;
    switch (v.length) {
      case 1:
        ret = v[0];
        break;
      case 3:
        ret = new PScriptType.Vec2(v[0], v[2]);
        break;
      case 5:
        ret = new PScriptType.Vec3(v[0], v[2], v[4]);
        break;
      default:
        console.warn("ExpressionSequence length: ", v.length);
    }
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#AdditiveExpression.
  visitAdditiveExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#RelationalExpression.
  visitRelationalExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PostIncrementExpression.
  visitPostIncrementExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#YieldExpression.
  visitYieldExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#BitNotExpression.
  visitBitNotExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#NewExpression.
  visitNewExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#LiteralExpression.
  visitLiteralExpression(ctx) {
    const v = this.visitChildren(ctx);
    if (v.length == 1) {
      return v[0];
    }
    return v;
  }

  // Visit a parse tree produced by PScriptParser#ArrayLiteralExpression.
  visitArrayLiteralExpression(ctx) {
    const v = this.visitChildren(ctx);
    return v[0];
  }

  // Visit a parse tree produced by PScriptParser#MemberDotExpression.
  visitMemberDotExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ClassExpression.
  visitClassExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#MemberIndexExpression.
  visitMemberIndexExpression(ctx) {
    const v = this.visitChildren(ctx);
    const q = this.variables[v[0]];
    const idx = v[2][0];
    return q[idx];
  }

  // Visit a parse tree produced by PScriptParser#IdentifierExpression.
  visitIdentifierExpression(ctx) {
    const v = this.visitChildren(ctx);
    if (v.length == 1) {
      return v[0];
    }
    return v;
  }

  // Visit a parse tree produced by PScriptParser#BitAndExpression.
  visitBitAndExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#BitOrExpression.
  visitBitOrExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#AssignmentOperatorExpression.
  visitAssignmentOperatorExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#VoidExpression.
  visitVoidExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#CoalesceExpression.
  visitCoalesceExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#initializer.
  visitInitializer(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#assignable.
  visitAssignable(ctx) {
    return ctx.getText();
  }

  // Visit a parse tree produced by PScriptParser#objectLiteral.
  visitObjectLiteral(ctx) {
    let ret = [];
    for (const c of ctx.children) {
      if (c.ruleIndex == PScriptParser.RULE_propertyAssignment) {
        ret.push(c.accept(this));
      }
    }
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#AnonymousFunctionDecl.
  visitAnonymousFunctionDecl(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ArrowFunction.
  visitArrowFunction(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#arrowFunctionParameters.
  visitArrowFunctionParameters(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#arrowFunctionBody.
  visitArrowFunctionBody(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#assignmentOperator.
  visitAssignmentOperator(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#literal.
  visitLiteral(ctx) {
    const v = this.visitChildren(ctx);
    if (v.length == 1) {
      return v[0];
    } else {
      return v;
    }
  }

  // Visit a parse tree produced by PScriptParser#templateStringLiteral.
  visitTemplateStringLiteral(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#templateStringAtom.
  visitTemplateStringAtom(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#numericLiteral.
  visitNumericLiteral(ctx) {
    const ret = Number(ctx.getText());
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#bigintLiteral.
  visitBigintLiteral(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#getter.
  visitGetter(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#setter.
  visitSetter(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#identifierName.
  visitIdentifierName(ctx) {
    const v = this.visitChildren(ctx);
    return v[0];
  }

  // Visit a parse tree produced by PScriptParser#identifier.
  visitIdentifier(ctx) {
    const Identifier = ctx.Identifier();
    const ret = Identifier.getText();
    return ret;
  }

  // Visit a parse tree produced by PScriptParser#reservedWord.
  visitReservedWord(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#keyword.
  visitKeyword(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#let_.
  visitLet_(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#eos.
  visitEos(ctx) {
    return this.visitChildren(ctx);
  }
}
