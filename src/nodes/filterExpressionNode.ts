import { FilterExpressionComparatorExpressions } from "./filterExpressionComparatorExpression";
import { FilterExpressionNotExpression } from "./filterExpressionNotExpression";
import { JoinType } from "./operationNode";

export type FilterExpressionNode = {
  readonly kind: "FilterExpressionNode";
  readonly expressions: (
    | FilterExpressionNode
    | FilterExpressionComparatorExpressions
    | FilterExpressionNotExpression
  )[];
  readonly joinType?: JoinType;
};
