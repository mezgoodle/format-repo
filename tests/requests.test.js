const Api = require("../utils/requests");

test("request tests", async () => {
  const api = new Api("test-client", "test-token", "mezgoodle", "StudyHepler");
  expect(api).toBeDefined();
  const obj = await api.checkRepository();
  expect(obj.name).toBe("StudyHepler");
  const status = await api.createRepository();
  expect(status).toBeInstanceOf(Object);
});
