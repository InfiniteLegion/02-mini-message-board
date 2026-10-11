/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.sql(`
  INSERT INTO messages (username, text, date) VALUES
    ('Obi Wan Kenobi', 'Hello there!', '2026-10-11T10:00:00Z'),
    ('General Grievus', 'General Kenobi!', '2026-10-11T10:01:00Z'),
    ('Anakin Skywalker', 'You underestimate my power', '2026-10-13T20:00:00Z')
  `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
