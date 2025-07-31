import { describe, it, expect, vi, beforeEach } from "vitest";
import { debounce } from "./debounce";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("calls the function after the specified delay", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn("test");
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("resets the timer when called multiple times", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn("first");
    vi.advanceTimersByTime(500);
    debouncedFn("second");
    vi.advanceTimersByTime(500);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledWith("second");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("passes multiple arguments to the function", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn("arg1", "arg2", 123);
    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledWith("arg1", "arg2", 123);
  });

  it("works with functions that return values", () => {
    const mockFn = vi.fn().mockReturnValue("test result");
    const debouncedFn = debounce(mockFn, 1000);

    const result = debouncedFn("test");
    expect(result).toBeUndefined();

    vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("handles zero delay", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 0);

    debouncedFn("test");
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(0);
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("handles negative delay", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, -1000);

    debouncedFn("test");
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(0);
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("clears previous timeout when called again", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn("first");
    vi.advanceTimersByTime(500);
    debouncedFn("second");
    vi.advanceTimersByTime(500);
    debouncedFn("third");
    vi.advanceTimersByTime(500);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledWith("third");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("works with arrow functions", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce((a: string, b: number) => mockFn(a, b), 1000);

    debouncedFn("test", 123);
    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledWith("test", 123);
  });

  it("works with methods", () => {
    const obj = {
      method: vi.fn(),
    };
    const debouncedFn = debounce(obj.method.bind(obj), 1000);

    debouncedFn("test");
    vi.advanceTimersByTime(1000);

    expect(obj.method).toHaveBeenCalledWith("test");
  });
});
