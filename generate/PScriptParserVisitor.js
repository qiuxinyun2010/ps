// Generated from PScriptParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from "antlr4";

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
    const assignable = ctx.assignable();
    const singleExpression = ctx.singleExpression();
    const s1 = assignable.accept(this);
    const s2 = singleExpression.accept(this);
    this.variables[s1] = s2;
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#elementList.
  visitElementList(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#arrayElement.
  visitArrayElement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#PropertyExpressionAssignment.
  visitPropertyExpressionAssignment(ctx) {
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
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
    const ret = this.visitChildren(ctx);
    for (let i = 0; i < ret[0].length; i++) {
      this.variables[ret[0][i]] = ret[2][i];
    }
    return ret;
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#BitShiftExpression.
  visitBitShiftExpression(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ParenthesizedExpression.
  visitParenthesizedExpression(ctx) {
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#ArrayLiteralExpression.
  visitArrayLiteralExpression(ctx) {
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#IdentifierExpression.
  visitIdentifierExpression(ctx) {
    // const identifier = ctx.identifier();
    // const r1 = identifier.accept(this);
    const ret = this.visitChildren(ctx);
    return ret;
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by PScriptParser#objectLiteral.
  visitObjectLiteral(ctx) {
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
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
    return Number(ctx.getText());
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
    return this.visitChildren(ctx);
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
