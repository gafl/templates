describe("Foo", function() {
  beforeEach(function() {
    this.foo = new Foo(); 
  });

  it("answers the question of life, the universe and everything", function() {
	expect(this.foo.answer()).toBe(42);
  });

  it("needs more work...", function() {
	expect(this.foo.foo()).toBe("foo");
  });
});
