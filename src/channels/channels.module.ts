import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/contacts/contacts.entity';
import { ContactsModule } from 'src/contacts/contacts.module';
import { EventsModule } from 'src/events/events.module';
import { IpfsModule } from 'src/ipfs/ipfs.module';
import { User } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';
import { Web3Module } from 'src/web3/web3.module';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { KeyManagerModule } from '../key-manager/key-manager.module';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { ChannelMember } from './entities/channelmembers.entity';
import { ChannelMessage } from './entities/channelmessages.entity';
import { Channel } from './entities/channels.entity';
import { ChannelResolver } from './resolvers/channel.resolver';
import { ChannelMembersResolver } from './resolvers/channelmembers.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Channel, ChannelMember, ChannelMessage, User, Contact]),
    CryptographyModule,
    UsersModule,
    ContactsModule,
    IpfsModule,
    Web3Module,
    EventsModule,
    KeyManagerModule,
  ],
  exports: [ChannelsService],
  providers: [ChannelsService, ChannelResolver, ChannelMembersResolver],
  controllers: [ChannelsController],
})
export class ChannelsModule {}