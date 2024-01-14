export class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // 计算向量长度
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  // 向量加法
  add(otherVec) {
    return new Vec2(this.x + otherVec.x, this.y + otherVec.y);
  }

  // 向量减法
  subtract(otherVec) {
    return new Vec2(this.x - otherVec.x, this.y - otherVec.y);
  }

  // 标量乘法
  multiply(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  // 标量除法
  divide(scalar) {
    if (scalar !== 0) {
      return new Vec2(this.x / scalar, this.y / scalar);
    } else {
      console.error("Division by zero is undefined.");
      return null;
    }
  }

  // 点积（内积）
  dotProduct(otherVec) {
    return this.x * otherVec.x + this.y * otherVec.y;
  }

  // 角度（弧度）计算
  angle() {
    return Math.atan2(this.y, this.x);
  }

  // 单位向量
  normalize() {
    const len = this.length();
    if (len !== 0) {
      return this.divide(len);
    } else {
      console.error("Cannot normalize a zero-length vector.");
      return null;
    }
  }

  // 复制向量
  clone() {
    return new Vec2(this.x, this.y);
  }
}

export class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // 计算向量长度
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  // 向量加法
  add(otherVec) {
    return new Vec3(
      this.x + otherVec.x,
      this.y + otherVec.y,
      this.z + otherVec.z
    );
  }

  // 向量减法
  subtract(otherVec) {
    return new Vec3(
      this.x - otherVec.x,
      this.y - otherVec.y,
      this.z - otherVec.z
    );
  }

  // 标量乘法
  multiply(scalar) {
    return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  // 标量除法
  divide(scalar) {
    if (scalar !== 0) {
      return new Vec3(this.x / scalar, this.y / scalar, this.z / scalar);
    } else {
      console.error("Division by zero is undefined.");
      return null;
    }
  }

  // 点积（内积）
  dotProduct(otherVec) {
    return this.x * otherVec.x + this.y * otherVec.y + this.z * otherVec.z;
  }

  // 叉积（外积）
  crossProduct(otherVec) {
    return new Vec3(
      this.y * otherVec.z - this.z * otherVec.y,
      this.z * otherVec.x - this.x * otherVec.z,
      this.x * otherVec.y - this.y * otherVec.x
    );
  }

  // 角度（弧度）计算
  angle() {
    return Math.acos(
      this.dotProduct(otherVec) / (this.length() * otherVec.length())
    );
  }

  // 单位向量
  normalize() {
    const len = this.length();
    if (len !== 0) {
      return this.divide(len);
    } else {
      console.error("Cannot normalize a zero-length vector.");
      return null;
    }
  }

  // 复制向量
  clone() {
    return new Vec3(this.x, this.y, this.z);
  }
}
