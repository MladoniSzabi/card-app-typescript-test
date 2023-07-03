import { Entry } from "@prisma/client";
import { Context, MockContext, createMockContext } from "../context";
import { prismaMock } from "../singleton";
import { server } from "../src/server";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe("server test", () => {
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("should create new entry", async () => {
    const entry: Entry = {
      id: "1",
      title: "asd",
      description: "dsa",
      created_at: new Date(2023, 7, 3),
      scheduled_for: new Date(2023, 7, 4),
    };

    prismaMock.entry.create.mockResolvedValue(entry);
    const response = await server.inject({
      method: "POST",
      url: "/create/",
      payload: entry,
    });

    expect(response.body).toEqual(JSON.stringify(entry));
  });

  it("should update entry", async () => {
    const entry: Entry = {
      id: "1",
      title: "asd",
      description: "dsa",
      created_at: new Date(2023, 7, 3),
      scheduled_for: new Date(2023, 7, 4),
    };

    prismaMock.entry.update.mockResolvedValue(entry);
    const response = await server.inject({
      method: "PUT",
      url: "/update/1",
      payload: entry,
    });

    expect(response.body).toEqual(JSON.stringify({ msg: "Updated successfully" }));
  });
});
