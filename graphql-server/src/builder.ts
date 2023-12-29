import SchemaBuilder from '@pothos/core';
import { DateResolver } from 'graphql-scalars';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from './db';

type ScalarDate = {
  Scalars: {
    Date: { 
      Input: Date; 
      Output: Date
    }
  };

  PrismaTypes: PrismaTypes;
}

const config = { 
  plugins: [PrismaPlugin],
  prisma: { client: prisma }

}

export const builder = new SchemaBuilder<ScalarDate>(config);

builder.addScalarType('Date', DateResolver);

builder.queryType({});