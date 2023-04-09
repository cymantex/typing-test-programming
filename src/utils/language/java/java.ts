import { repeatArray } from "../../utils";
import { keywords } from "./keywords";
import { io } from "./io";
import { lang } from "./lang/lang";
import { annotation } from "./lang/annotation";
import { constant } from "./lang/constant";
import { invoke } from "./lang/invoke";
import { module } from "./lang/module";
import { ref } from "./lang/ref/ref";
import { reflect } from "./lang/reflect";
import { runtime } from "./lang/runtime";
import { math } from "./math";
import { net } from "./net/net";
import { netSpi } from "./net/netSpi";
import { nio } from "./nio/nio";
import { channels } from "./nio/channels/channels";
import { channelsSpi } from "./nio/channels/channelsSpi";
import { charset } from "./nio/charset/charset";
import { charsetSpi } from "./nio/charset/charsetSpi";
import { file } from "./nio/file/file";
import { attribute } from "./nio/file/attribute";
import { fileSpi } from "./nio/file/fileSpi";
import { security } from "./security/security";
import { cert } from "./security/cert";
import { interfaces } from "./security/interfaces";
import { spec } from "./security/spec";
import { text } from "./text/text";
import { textSpi } from "./text/textSpi";
import { time } from "./time/time";
import { chrono } from "./time/chrono";
import { format } from "./time/format";
import { temporal } from "./time/temporal";
import { zone } from "./time/zone";
import { util } from "./util/util";
import { concurrent } from "./util/concurrent/concurrent";
import { atomic } from "./util/concurrent/atomic";
import { locks } from "./util/concurrent/locks";
import { functions } from "./util/functions";
import { jar } from "./util/jar";
import { random } from "./util/random";
import { regex } from "./util/regex";
import { utilSpi } from "./util/utilSpi";
import { stream } from "./util/stream";
import { zip } from "./util/zip";
import { Settings } from "@/types";

export const java = (settings: Settings) =>
  repeatArray(
    [
      ...keywords(settings),
      ...io(settings),
      ...lang(settings),
      ...annotation(settings),
      ...constant(settings),
      ...invoke(settings),
      ...module(settings),
      ...ref(settings),
      ...reflect(settings),
      ...runtime(settings),
      ...math(settings),
      ...net(settings),
      ...netSpi(settings),
      ...nio(settings),
      ...channels(settings),
      ...channelsSpi(settings),
      ...charset(settings),
      ...charsetSpi(settings),
      ...file(settings),
      ...attribute(settings),
      ...fileSpi(settings),
      ...security(settings),
      ...cert(settings),
      ...interfaces(settings),
      ...spec(settings),
      ...text(settings),
      ...textSpi(settings),
      ...time(settings),
      ...chrono(settings),
      ...format(settings),
      ...temporal(settings),
      ...zone(settings),
      ...util(settings),
      ...concurrent(settings),
      ...atomic(settings),
      ...locks(settings),
      ...functions(settings),
      ...jar(settings),
      ...random(settings),
      ...regex(settings),
      ...utilSpi(settings),
      ...stream(settings),
      ...zip(settings),
    ],
    settings.vocabularyMultiplier
  );
