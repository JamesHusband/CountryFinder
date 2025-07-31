import { describe, it, expect } from "vitest";
import {
  calculateTotalPages,
  getPaginatedData,
  getNextPage,
  getPreviousPage,
  canGoToNextPage,
  canGoToPreviousPage,
} from "./pagination";

describe("pagination", () => {
  describe("calculateTotalPages", () => {
    it("calculates total pages correctly", () => {
      expect(calculateTotalPages(100, 10)).toBe(10);
      expect(calculateTotalPages(95, 10)).toBe(10);
      expect(calculateTotalPages(101, 10)).toBe(11);
    });

    it("returns 0 for empty data", () => {
      expect(calculateTotalPages(0, 10)).toBe(0);
    });

    it("handles entries per page larger than total items", () => {
      expect(calculateTotalPages(5, 10)).toBe(1);
    });

    it("handles entries per page of 1", () => {
      expect(calculateTotalPages(10, 1)).toBe(10);
    });
  });

  describe("getPaginatedData", () => {
    const testData = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    it("returns correct slice for first page", () => {
      const result = getPaginatedData(testData, 1, 3);
      expect(result).toEqual(["a", "b", "c"]);
    });

    it("returns correct slice for middle page", () => {
      const result = getPaginatedData(testData, 2, 3);
      expect(result).toEqual(["d", "e", "f"]);
    });

    it("returns correct slice for last page", () => {
      const result = getPaginatedData(testData, 4, 3);
      expect(result).toEqual(["j"]);
    });

    it("returns empty array for page beyond data", () => {
      const result = getPaginatedData(testData, 5, 3);
      expect(result).toEqual([]);
    });

    it("returns empty array for empty data", () => {
      const result = getPaginatedData([], 1, 10);
      expect(result).toEqual([]);
    });

    it("works with different data types", () => {
      const numberData = [1, 2, 3, 4, 5];
      const result = getPaginatedData(numberData, 2, 2);
      expect(result).toEqual([3, 4]);
    });
  });

  describe("getNextPage", () => {
    it("increments page number", () => {
      expect(getNextPage(1, 5)).toBe(2);
      expect(getNextPage(2, 5)).toBe(3);
    });

    it("does not exceed total pages", () => {
      expect(getNextPage(5, 5)).toBe(5);
      expect(getNextPage(6, 5)).toBe(5);
    });

    it("handles edge cases", () => {
      expect(getNextPage(0, 5)).toBe(1);
      expect(getNextPage(1, 1)).toBe(1);
    });
  });

  describe("getPreviousPage", () => {
    it("decrements page number", () => {
      expect(getPreviousPage(3)).toBe(2);
      expect(getPreviousPage(2)).toBe(1);
    });

    it("does not go below 1", () => {
      expect(getPreviousPage(1)).toBe(1);
      expect(getPreviousPage(0)).toBe(1);
    });

    it("handles edge cases", () => {
      expect(getPreviousPage(5)).toBe(4);
      expect(getPreviousPage(1)).toBe(1);
    });
  });

  describe("canGoToNextPage", () => {
    it("returns true when not on last page", () => {
      expect(canGoToNextPage(1, 5)).toBe(true);
      expect(canGoToNextPage(2, 5)).toBe(true);
      expect(canGoToNextPage(4, 5)).toBe(true);
    });

    it("returns false when on last page", () => {
      expect(canGoToNextPage(5, 5)).toBe(false);
    });

    it("returns false when current page exceeds total pages", () => {
      expect(canGoToNextPage(6, 5)).toBe(false);
    });

    it("handles edge cases", () => {
      expect(canGoToNextPage(0, 5)).toBe(true);
      expect(canGoToNextPage(1, 1)).toBe(false);
    });
  });

  describe("canGoToPreviousPage", () => {
    it("returns true when not on first page", () => {
      expect(canGoToPreviousPage(2)).toBe(true);
      expect(canGoToPreviousPage(3)).toBe(true);
      expect(canGoToPreviousPage(5)).toBe(true);
    });

    it("returns false when on first page", () => {
      expect(canGoToPreviousPage(1)).toBe(false);
    });

    it("returns false for invalid page numbers", () => {
      expect(canGoToPreviousPage(0)).toBe(false);
      expect(canGoToPreviousPage(-1)).toBe(false);
    });
  });
});
