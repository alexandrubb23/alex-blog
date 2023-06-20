import {
  date,
  index,
  int,
  mysqlTable,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';

export const posts = mysqlTable(
  'posts',
  {
    id: int('id').autoincrement().primaryKey().notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date('date', { mode: 'string' }).notNull(),
    content: text('content').notNull(),
    postType: varchar('post_type', { length: 255 }).notNull(),
    topicId: int('topic_id'),
  },
  table => {
    return {
      topicIdIdx: index('topic_id_idx').on(table.topicId),
    };
  }
);

export const topics = mysqlTable(
  'topics',
  {
    id: int('id').autoincrement().primaryKey().notNull(),
    topic: varchar('topic', { length: 255 }).notNull(),
    description: varchar('description', { length: 255 }).notNull(),
  },
  table => {
    return {
      topic: uniqueIndex('topic').on(table.topic),
    };
  }
);
