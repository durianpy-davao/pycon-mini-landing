import {
  SPONSOR_PRIORITY,
  type CMSDto,
  type Schedule,
  type ScheduleDto,
  type Speaker,
  type Sponsor,
  type SponsorTier,
  type GroupedSponsorTier,
} from './types';

interface CMSData {
  schedule: Schedule;
  sponsorsInfo: GroupedSponsorTier[];
  speakers: Speaker[];
}

export const emptyResponse = {
  schedule: {
    title: '',
    programStart: 0,
    programEnd: 0,
    program: [],
  },
  sponsorsInfo: [],
  speakers: [],
};

export function mapCMSResponseToModel({ data }: CMSDto): CMSData {
  if (!data) {
    return emptyResponse;
  }

  const { listEventSchedules, listSpeakerModels, listSponsorModels, listSponsorTierModels } = data;

  return {
    schedule: eventScheduleMapper(listEventSchedules.data[0]),
    sponsorsInfo: sponsorsMapper(listSponsorTierModels.data, listSponsorModels.data),
    speakers: speakersMapper(listSpeakerModels.data),
  };
}

export function eventScheduleMapper({
  scheduleTitle,
  scheduleStartTime,
  scheduleEndTime,
  scheduleActivities,
}: ScheduleDto) {
  return {
    title: scheduleTitle,
    programStart: scheduleStartTime,
    programEnd: scheduleEndTime,
    program: scheduleActivities,
  };
}

export function speakersMapper(speakers: Speaker[]) {
  return speakers;
}

export function sponsorsMapper(sponsorTiers: SponsorTier[], sponsors: Sponsor[]): GroupedSponsorTier[] {
  const sponsorsInfo = sponsorTiers
    .map((tier) => ({
      name: tier.name,
      order: tier.order,
      displayName: tier.displayName,
      billingAcknowledgement: tier.billingAcknowledgement,
      priority: SPONSOR_PRIORITY[tier.name],
      sponsors: sponsors.filter((sponsor) => sponsor.sponsorTier.name === tier.name),
    }))
    .sort((a, b) => a.order - b.order);
  return sponsorsInfo;
}
